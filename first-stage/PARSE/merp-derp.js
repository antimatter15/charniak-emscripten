mergeInto(LibraryManager.library, {
	progress_indicator: function(a, b) {

		// these are some empirically derived magical numbers
		// that roughly give a linear indicaation of startup progress

		var progress_rate = [0 ,20,75,80,84,96,98,98.5,99,100],
		progress_div =  [28,48,73,28,28,28,28,28,2];

		var progress = (a / progress_div[b]) * (progress_rate[b + 1] - progress_rate[b]) + progress_rate[b]

		if(Module.reportProgress) Module.reportProgress(progress);

	},
});
