var treebank_tags = [
{"type": "Miscellaneous", "tag": "-CLR", "name": "(closely related) ", "explanation": "marks constituents that occupy some middle ground between arguments and adjunct of the verb phrase. These roughly correspond to `predication adjuncts`, prepositional ditransitives, and some `phrasel verbs`. Although constituents marked with -CLR are not strictly speaking complements, they are treated as complements whenever it makes a bracketing difference. The precise meaning of -CLR depends somewhat on the category of the phrase."},
{"type": "Miscellaneous", "tag": "-CLF", "name": "(cleft) ", "explanation": "marks it-clefts (`true clefts`) and may be added to the labels S, SINV, or SQ."},
{"type": "Miscellaneous", "tag": "-HLN", "name": "(headline) ", "explanation": "marks headlines and datelines. Note that headlines and datelines always constitute a unit of text that is structurally independent from the following sentence."},
{"type": "Miscellaneous", "tag": "-TTL", "name": "(title) ", "explanation": "is attached to the top node of a title when this title appears inside running text. -TTL implies -NOM. The internal structure of the title is bracketed as usual."},


{"type": "Adverbials", "tag": "-BNF", "name": "(benefactive) ", "explanation": "marks the beneficiary of an action (attaches to NP or PP). This tag is used only when (1) the verb can undergo dative shift and (2) the prepositional variant (with the same meaning) uses for. The prepositional objects of dative-shifting verbs with other prepositions than for (such as to or of) are annotated -DTV."},
{"type": "Adverbials", "tag": "-DIR", "name": "(direction) ", "explanation": "marks adverbials that answer the questions `from where?` and `to where?` It implies motion, which can be metaphorical as in `...rose 5 pts. to 57-1/2` or `increased 70% to 5.8 billion yen` -DIR is most often used with verbs of motion/transit and financial verbs."},
{"type": "Adverbials", "tag": "-EXT", "name": "(extent) ", "explanation": "marks adverbial phrases that describe the spatial extent of an activity. -EXT was incorporated primarily for cases of movement in financial space, but is also used in analogous situations elsewhere. Obligatory complements do not receive -EXT. Words such as fully and completely are absolutes and do not receive -EXT. "},
{"type": "Adverbials", "tag": "-LOC", "name": "(locative) ", "explanation": "marks adverbials that indicate place/setting of the event. -LOC may also indicate metaphorical location. There is likely to be some varation in the use of -LOC due to differing annotator interpretations. In cases where the annotator is faced with a choice between -LOC or -TMP, the default is -LOC. In cases involving SBAR, SBAR should not receive -LOC. -LOC has some uses that are not adverbial, such as with place names that are adjoined to other NPs and NAC-LOC premodifiers of NPs. The special tag -PUT is used for the locative argument of put."},
{"type": "Adverbials", "tag": "-MNR", "name": "(manner) ", "explanation": "marks adverbials that indicate manner, including instrument phrases."},
{"type": "Adverbials", "tag": "-PRP", "name": "(purpose or reason) ", "explanation": "marks purpose or reason clauses and PPs."},
{"type": "Adverbials", "tag": "-TMP", "name": "(temporal) ", "explanation": "marks temporal or aspectual adverbials that answer the questions when, how often, or how long. It has some uses that are not strictly adverbial, auch as with dates that modify other NPs at S- or VP-level. In cases of apposition involving SBAR, the SBAR should not be labeled -TMP. Only in `financialspeak,` and only when the dominating PP is a PP-DIR, may temporal modifiers be put at PP object level. Note that -TMP is not used in possessive phrases. "},



{"type": "Grammatical Role", "tag": "-DTV", "name": "(dative) ", "explanation": "marks the dative object in the unshifted form of the double object construction. If the preposition introducing the `dative` object is for, it is considered benefactive (-BNF). -DTV (and -BNF) is only used after verbs that can undergo dative shift."},
{"type": "Grammatical Role", "tag": "-LGS", "name": "(logical subject) ", "explanation": "is used to mark the logical subject in passives. It attaches to the NP object of by and not to the PP node itself."},
{"type": "Grammatical Role", "tag": "-PRD", "name": "(predicate) ", "explanation": "marks any predicate that is not VP. In the do so construction, the so is annotated as a predicate."},
{"type": "Grammatical Role", "tag": "-PUT", "name": "", "explanation": "marks the locative complement of put. "},
{"type": "Grammatical Role", "tag": "-SBJ", "name": "(surface subject) ", "explanation": "marks the structural surface subject of both matrix and embedded clauses, including those with null subjects."},
{"type": "Grammatical Role", "tag": "-TPC", "name": "(topicalized)","explanation": "marks elements that appear before the subject in a declarative sentence, but in two cases only: 1) if the front element is associated with a *T* in the position of the gap. 2) if the fronted element is left-dislocated (i.e. it is associated with a resumptive pronoun in the position of the gap)."},

{"type": "Grammatical Role", "tag": "-VOC", "name": "(vocative) ", "explanation": "marks nouns of address, regardless of their position in the sentence. It is not coindexed to the subject and not get -TPC when it is sentence-initial."},


{"type": "Form/function discrepancies", "tag": "-ADV", "name": "(adverbial) ", "explanation": "marks a constituent other than ADVP or PP when it is used adverbially (e.g. NPs or free (`headless` relatives). However, constituents that themselves are modifying an ADVP generally do not get -ADV. If a more specific tag is available (for example, -TMP) then it is used alone and -ADV is implied. See the Adverbials section."},
{"type": "Form/function discrepancies", "tag": "-NOM", "name": "(nominal) ", "explanation": "marks free (`headless`) relatives and gerunds when they act nominally."},



{"type": "Word Level", "tag": "CC", "name": "", "explanation": "Coordinating conjunction"},
{"type": "Word Level", "tag": "CD", "name": "", "explanation": "Cardinal number"},
{"type": "Word Level", "tag": "DT", "name": "", "explanation": "Determiner"},
{"type": "Word Level", "tag": "EX", "name": "", "explanation": "Existential there"},
{"type": "Word Level", "tag": "FW", "name": "", "explanation": "Foreign word"},
{"type": "Word Level", "tag": "IN", "name": "", "explanation": "Preposition or subordinating conjunction"},
{"type": "Word Level", "tag": "JJ", "name": "", "explanation": "Adjective"},
{"type": "Word Level", "tag": "JJR", "name": "", "explanation": "Adjective, comparative"},
{"type": "Word Level", "tag": "JJS", "name": "", "explanation": "Adjective, superlative"},
{"type": "Word Level", "tag": "LS", "name": "", "explanation": "List item marker"},
{"type": "Word Level", "tag": "MD", "name": "", "explanation": "Modal"},
{"type": "Word Level", "tag": "NN", "name": "", "explanation": "Noun, singular or mass"},
{"type": "Word Level", "tag": "NNS", "name": "", "explanation": "Noun, plural"},
{"type": "Word Level", "tag": "NNP", "name": "", "explanation": "Proper noun, singular"},
{"type": "Word Level", "tag": "NNPS", "name": "", "explanation": "Proper noun, plural"},
{"type": "Word Level", "tag": "PDT", "name": "", "explanation": "Predeterminer"},
{"type": "Word Level", "tag": "POS", "name": "", "explanation": "Possessive ending"},
{"type": "Word Level", "tag": "PRP", "name": "", "explanation": "Personal pronoun"},
{"type": "Word Level", "tag": "PRP$", "name": "", "explanation": "Possessive pronoun (prolog version PRP-S)"},
{"type": "Word Level", "tag": "RB", "name": "", "explanation": "Adverb"},
{"type": "Word Level", "tag": "RBR", "name": "", "explanation": "Adverb, comparative"},
{"type": "Word Level", "tag": "RBS", "name": "", "explanation": "Adverb, superlative"},
{"type": "Word Level", "tag": "RP", "name": "", "explanation": "Particle"},
{"type": "Word Level", "tag": "SYM", "name": "", "explanation": "Symbol"},
{"type": "Word Level", "tag": "TO", "name": "", "explanation": "to"},
{"type": "Word Level", "tag": "UH", "name": "", "explanation": "Interjection"},
{"type": "Word Level", "tag": "VB", "name": "", "explanation": "Verb, base form"},
{"type": "Word Level", "tag": "VBD", "name": "", "explanation": "Verb, past tense"},
{"type": "Word Level", "tag": "VBG", "name": "", "explanation": "Verb, gerund or present participle"},
{"type": "Word Level", "tag": "VBN", "name": "", "explanation": "Verb, past participle"},
{"type": "Word Level", "tag": "VBP", "name": "", "explanation": "Verb, non-3rd person singular present"},
{"type": "Word Level", "tag": "VBZ", "name": "", "explanation": "Verb, 3rd person singular present"},
{"type": "Word Level", "tag": "WDT", "name": "", "explanation": "Wh-determiner"},
{"type": "Word Level", "tag": "WP", "name": "", "explanation": "Wh-pronoun"},
{"type": "Word Level", "tag": "WP$", "name": "", "explanation": "Possessive wh-pronoun (prolog version WP-S)"},
{"type": "Word Level", "tag": "WRB", "name": "", "explanation": "Wh-adverb"},



{"type": "Phrase Level", "tag": "ADJP", "name": "", "explanation": "Adjective Phrase."},
{"type": "Phrase Level", "tag": "ADVP", "name": "", "explanation": "Adverb Phrase."},
{"type": "Phrase Level", "tag": "CONJP", "name": "", "explanation": "Conjunction Phrase."},
{"type": "Phrase Level", "tag": "FRAG", "name": "", "explanation": "Fragment."},
{"type": "Phrase Level", "tag": "INTJ", "name": "", "explanation": "Interjection. Corresponds approximately to the part-of-speech tag UH."},
{"type": "Phrase Level", "tag": "LST", "name": "", "explanation": "List marker. Includes surrounding punctuation."},
{"type": "Phrase Level", "tag": "NAC", "name": "", "explanation": "Not a Constituent; used to show the scope of certain prenominal modifiers within an NP."},
{"type": "Phrase Level", "tag": "NP", "name": "", "explanation": "Noun Phrase. "},
{"type": "Phrase Level", "tag": "NX", "name": "", "explanation": "Used within certain complex NPs to mark the head of the NP. Corresponds very roughly to N-bar level but used quite differently."},
{"type": "Phrase Level", "tag": "PP", "name": "", "explanation": "Prepositional Phrase."},
{"type": "Phrase Level", "tag": "PRN", "name": "", "explanation": "Parenthetical. "},
{"type": "Phrase Level", "tag": "PRT", "name": "", "explanation": "Particle. Category for words that should be tagged RP. "},
{"type": "Phrase Level", "tag": "QP", "name": "", "explanation": "Quantifier Phrase (i.e. complex measure/amount phrase); used within NP."},
{"type": "Phrase Level", "tag": "RRC", "name": "", "explanation": "Reduced Relative Clause. "},
{"type": "Phrase Level", "tag": "UCP", "name": "", "explanation": "Unlike Coordinated Phrase. "},
{"type": "Phrase Level", "tag": "VP", "name": "", "explanation": "Verb Phrase. "},
{"type": "Phrase Level", "tag": "WHADJP", "name": "", "explanation": "Wh-adjective Phrase. Adjectival phrase containing a wh-adverb, as in how hot."},
{"type": "Phrase Level", "tag": "WHAVP", "name": "", "explanation": "Wh-adverb Phrase. Introduces a clause with an NP gap. May be null (containing the 0 complementizer) or lexical, containing a wh-adverb such as how or why."},
{"type": "Phrase Level", "tag": "WHNP", "name": "", "explanation": "Wh-noun Phrase. Introduces a clause with an NP gap. May be null (containing the 0 complementizer) or lexical, containing some wh-word, e.g. who, which book, whose daughter, none of which, or how many leopards."},
{"type": "Phrase Level", "tag": "WHPP", "name": "", "explanation": "Wh-prepositional Phrase. Prepositional phrase containing a wh-noun phrase (such as of which or by whose authority) that either introduces a PP gap or is contained by a WHNP."},
{"type": "Phrase Level", "tag": "X", "name": "", "explanation": "Unknown, uncertain, or unbracketable. X is often used for bracketing typos and in bracketing the...the-constructions."},




{"type": "Clause Level", "tag": "S", "name": "", "explanation": "simple declarative clause, i.e. one that is not introduced by a (possible empty) subordinating conjunction or a wh-word and that does not exhibit subject-verb inversion."},
{"type": "Clause Level", "tag": "SBAR", "name": "", "explanation": "Clause introduced by a (possibly empty) subordinating conjunction."},
{"type": "Clause Level", "tag": "SBARQ", "name": "", "explanation": "Direct question introduced by a wh-word or a wh-phrase. Indirect questions and relative clauses should be bracketed as SBAR, not SBARQ."},
{"type": "Clause Level", "tag": "SINV", "name": "", "explanation": "Inverted declarative sentence, i.e. one in which the subject follows the tensed verb or modal."},
{"type": "Clause Level", "tag": "SQ", "name": "", "explanation": "Inverted yes/no question, or main clause of a wh-question, following the wh-phrase in SBARQ."},

]