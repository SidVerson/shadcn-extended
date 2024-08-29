import "./chunk-DC5AMYBS.js";

// node_modules/shiki/dist/langs/coq.mjs
var lang = Object.freeze({ "displayName": "Coq", "fileTypes": ["v"], "name": "coq", "patterns": [{ "comment": "Vernacular import keywords", "match": "\\b(From|Require|Import|Export|Local|Global|Include)\\b", "name": "keyword.control.import.coq" }, { "comment": "Vernacular scope keywords", "match": "\\b((Open|Close|Delimit|Undelimit|Bind)\\s+Scope)\\b", "name": "keyword.control.import.coq" }, { "captures": { "1": { "name": "keyword.source.coq" }, "2": { "name": "entity.name.function.theorem.coq" } }, "comment": "Theorem declarations", "match": "(Theorem|Lemma|Remark|Fact|Corollary|Property|Proposition|Goal)\\s+((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)" }, { "captures": { "1": { "name": "keyword.source.coq" }, "2": { "name": "keyword.source.coq" }, "3": { "name": "entity.name.assumption.coq" } }, "comment": "Assumptions", "match": "\\b(Parameters?|Axioms?|Conjectures?|Variables?|Hypothesis|Hypotheses)(\\s+Inline)?\\b\\s*\\(?\\s*((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)" }, { "captures": { "1": { "name": "keyword.source.coq" }, "3": { "name": "entity.name.assumption.coq" } }, "comment": "Context", "match": "\\b(Context)\\b\\s*`?\\s*(\\(|\\{)?\\s*((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)" }, { "captures": { "1": { "name": "keyword.source.coq" }, "2": { "name": "keyword.source.coq" }, "3": { "name": "entity.name.function.coq" } }, "comment": "Definitions", "match": "(\\b(?:Program|Local)\\s+)?\\b(Definition|Fixpoint|CoFixpoint|Function|Example|Let(?:\\s+Fixpoint|\\s+CoFixpoint)?|Instance|Equations|Equations?)\\s+((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)" }, { "captures": { "1": { "name": "keyword.source.coq" } }, "comment": "Obligations", "match": "\\b((Show\\s+)?Obligation\\s+Tactic|Obligations\\s+of|Obligation|Next\\s+Obligation(\\s+of)?|Solve\\s+Obligations(\\s+of)?|Solve\\s+All\\s+Obligations|Admit\\s+Obligations(\\s+of)?|Instance)\\b" }, { "captures": { "1": { "name": "keyword.source.coq" }, "3": { "name": "entity.name.type.coq" } }, "comment": "Type declarations", "match": "(CoInductive|Inductive|Variant|Record|Structure|Class)\\s+(>\\s*)?((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)" }, { "captures": { "1": { "name": "keyword.source.coq" }, "2": { "name": "entity.name.function.ltac" } }, "comment": "Ltac declarations", "match": "(Ltac)\\s+((\\p{L}|[_\\u00A0])(\\p{L}|[0-9_\\u00A0'])*)" }, { "comment": "Vernacular keywords", "match": "\\b(Hint|Constructors|Resolve|Rewrite|Ltac|Implicit(\\s+Types)?|Set|Unset|Remove\\s+Printing|Arguments|Tactic\\s+Notation|Notation|Infix|Reserved\\s+Notation|Section|Module\\s+Type|Module|End|Check|Print|Eval|Search|Universe|Coercions?|Generalizable\\s+All|Generalizable\\s+Variable?|Existing\\s+Instance|Existing\\s+Class|Canonical|About|Locate|Collection|Typeclasses\\s+(Opaque|Transparent))\\b", "name": "keyword.source.coq" }, { "comment": "Proof keywords", "match": "\\b(Proof|Qed|Defined|Save|Abort(\\s+All)?|Undo(\\s+To)?|Restart|Focus|Unfocus|Unfocused|Show\\s+Proof|Show\\s+Existentials|Show|Unshelve)\\b", "name": "keyword.source.coq" }, { "comment": "Vernacular Debug keywords", "match": "\\b(Quit|Drop|Time|Redirect|Timeout|Fail)\\b", "name": "keyword.debug.coq" }, { "comment": "Admits are bad", "match": "\\b(admit|Admitted)\\b", "name": "invalid.illegal.admit.coq" }, { "comment": "Operators", "match": ":|\\||=|<|>|\\*|\\+|-|\\{|\\}|≠|∨|∧|↔|¬|→|≤|≥", "name": "keyword.operator.coq" }, { "comment": "Type keywords", "match": "\\b(forall|exists|Type|Set|Prop|nat|bool|option|list|unit|sum|prod|comparison|Empty_set)\\b|∀|∃", "name": "support.type.coq" }, { "comment": "Ltac keywords", "match": "\\b(try|repeat|rew|progress|fresh|solve|now|first|tryif|at|once|do|only)\\b", "name": "keyword.control.ltac" }, { "comment": "Common Ltac connectors", "match": "\\b(into|with|eqn|by|move|as|using)\\b", "name": "keyword.control.ltac" }, { "comment": "Gallina keywords", "match": "\\b(match|lazymatch|multimatch|fun|with|return|end|let|in|if|then|else|fix|for|where|and)\\b|λ", "name": "keyword.control.gallina" }, { "comment": "Ltac builtins", "match": "\\b(intro|intros|revert|induction|destruct|auto|eauto|tauto|eassumption|apply|eapply|assumption|constructor|econstructor|reflexivity|inversion|injection|assert|split|esplit|omega|fold|unfold|specialize|rewrite|erewrite|change|symmetry|refine|simpl|intuition|firstorder|generalize|idtac|exist|exists|eexists|elim|eelim|rename|subst|congruence|trivial|left|right|set|pose|discriminate|clear|clearbody|contradict|contradiction|exact|dependent|remember|case|easy|unshelve|pattern|transitivity|etransitivity|f_equal|exfalso|replace|abstract|cycle|swap|revgoals|shelve|unshelve)\\b", "name": "support.function.builtin.ltac" }, { "applyEndPatternLast": 1, "begin": "\\(\\*(?!#)", "end": "\\*\\)", "name": "comment.block.coq", "patterns": [{ "include": "#block_comment" }, { "include": "#block_double_quoted_string" }] }, { "match": "\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b", "name": "constant.numeric.gallina" }, { "comment": "Gallina builtin constructors", "match": "\\b(True|False|tt|false|true|Some|None|nil|cons|pair|inl|inr|O|S|Eq|Lt|Gt|id|ex|all|unique)\\b", "name": "constant.language.constructor.gallina" }, { "match": "\\b_\\b", "name": "constant.language.wildcard.coq" }, { "begin": '"', "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.coq" } }, "end": '"', "endCaptures": { "0": { "name": "punctuation.definition.string.end.coq" } }, "name": "string.quoted.double.coq" }], "repository": { "block_comment": { "applyEndPatternLast": 1, "begin": "\\(\\*(?!#)", "end": "\\*\\)", "name": "comment.block.coq", "patterns": [{ "include": "#block_comment" }, { "include": "#block_double_quoted_string" }] }, "block_double_quoted_string": { "applyEndPatternLast": 1, "begin": '"', "beginCaptures": { "0": { "name": "punctuation.definition.string.begin.coq" } }, "end": '"', "endCaptures": { "0": { "name": "punctuation.definition.string.end.coq" } }, "name": "string.quoted.double.coq" } }, "scopeName": "source.coq" });
var coq = [
  lang
];
export {
  coq as default
};
//# sourceMappingURL=coq-BNREUJMO.js.map
