Charniak Parser Emscripten Port
----------------------

![Constituent Parse Tree](https://upload.wikimedia.org/wikipedia/commons/5/54/Parse_tree_1.jpg)

This is a parser which is capable of transforming a sentence into a [Constituency-based parse tree](https://en.wikipedia.org/wiki/Parse_tree), like the one which is depicted above. 

This port runs in Javascript, thanks to Emscripten, so it can run in the browser. That may not be a good idea, because this is ridiculously memory-intensive. If you want to do anything serious, you should probably use the bindings for [Python](http://pypi.python.org/pypi/bllipparser/) or Java.

The BLLIP Parser (also known as Charniak-Johnson Parser, CJ Parser, or Brown Reranking Parser) achieves [state of the art](http://nlp.stanford.edu/pubs/lrecstanforddeps_final_final.pdf) performance compared to Stanford CoreNLP and the Berkeley Parser. 

I didn't actually bother porting the reranking second-stage bit of the parser, so it won't perform as well as typical BLLIP, which is all the more reason to ignore this project and use the real one. 


Authors
~~~~~~~~~

This Emscripten port is antimatter15's fault, the actual parser
is made by the Brown Laboratory for Linguistic Information Processing. 
If you didn't have a good experience using this library, don't attribute
any of that to the parser upon which this was based. 

Copyright Mark Johnson, Eugene Charniak, 24th November 2005 --- August 2006

We request acknowledgement in any publications that make use of this
software and any code derived from this software. Please report the
release date of the software that you are using, as this will enable
others to compare their results to yours.


Copyright 2005 Brown University, Providence, RI.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License.  You may obtain
a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
License for the specific language governing permissions and limitations
under the License.



References
^^^^^^^^^^


* Eugene Charniak and Mark Johnson. "`Coarse-to-fine n-best parsing and
  MaxEnt discriminative reranking
  <http://aclweb.org/anthology/P/P05/P05-1022.pdf>`_."  Proceedings of
  the 43rd Annual Meeting on Association for Computational Linguistics.
  `Association for Computational Linguistics, 2005
  <http://bllip.cs.brown.edu/publications/index_bib.shtml#charniak-johnson:2005:ACL>`_.

* Eugene Charniak. "`A maximum-entropy-inspired parser
  <http://aclweb.org/anthology/A/A00/A00-2018.pdf>`_." Proceedings of
  the 1st North American chapter of the Association for Computational
  Linguistics conference. `Association for Computational Linguistics, 2000
  <http://bllip.cs.brown.edu/publications/index_bib.shtml#Charniak:2000:NAACL>`_.

Self-training:

* David McClosky, Eugene Charniak, and Mark Johnson.
  "`Effective Self-Training for Parsing
  <http://www.aclweb.org/anthology/N/N06/N06-1020.pdf>`_."
  Proceedings of the Conference on Human Language Technology
  and North American chapter of the `Association for
  Computational Linguistics (HLT-NAACL 2006), 2006
  <http://www.aclweb.org/anthology/N/N06/N06-1020.bib>`_.

Syntactic fusion:

* Do Kook Choe, David McClosky, and Eugene Charniak.
  "`Syntactic Parse Fusion
  <http://nlp.stanford.edu/~mcclosky/papers/choe-emnlp-2015.pdf>`_."
  Proceedings of the Conference on `Empirical Methods in Natural Language
  Processing (EMNLP 2015), 2015
  <http://nlp.stanford.edu/~mcclosky/papers/choe-emnlp-2015.bib>`_.
