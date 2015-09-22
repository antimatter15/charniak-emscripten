importScripts("charniak.js")

load_model = Module.cwrap('load_model', null, ['string'])
parse_sentence = Module.cwrap('parse_sentence', null, ['string'])
set_pretty = Module.cwrap('set_pretty', null, ['number'])
set_case = Module.cwrap('set_case', null, ['number'])
set_nth = Module.cwrap('set_nth', null, ['number'])

Module.reportProgress = function(pct){
	postMessage({
		type: 'progress',
		value: pct
	})
}

var ouput_buffer = []
Module.print = function(text){
	output_buffer.push(text)
}
var is_ready = false, ready_queue = [];
Module.onRuntimeInitialized = function(){
	is_ready = true;
	postMessage({ type: 'ready' })
	while(ready_queue.length){
		handle_packet(ready_queue.shift())
	}
}

function handle_packet(e){
	var data = e.data;
	function respond(type, obj){
		if(!obj) obj = {};
		obj.type = type;
		if('id' in data) obj.parent = data.id;
		postMessage(obj)
	}

	if(data.type == 'load'){
		load_model("EN-DATA/")	
		respond('loaded')
	}else if(data.type == 'pretty'){
		set_pretty(data.value)	
		respond('ack')
	}else if(data.type == 'case'){
		set_case(data.value)	
		respond('ack')
	}else if(data.type == 'nth'){
		set_nth(data.value)
		respond('ack')
	}else if(data.type == 'parse'){
		output_buffer = []
		parse_sentence("<s> " + data.text + " </s>")
		respond('stdout', {text: output_buffer})
	}
}


onmessage = function(e){
	if(is_ready){
		handle_packet(e)
	}else{
		ready_queue.push(e)
	}
}