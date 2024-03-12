module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow specified words",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: null,
    schema: [
      {
        type: "array",
        items: {
          type: "string",
        },
        uniqueItems: true,
      },
    ],
  },
  create(context) {
    const disallowedWords = context.options[0];
    const sourceCode = context.getSourceCode();

    return {
      Program() {
        disallowedWords.forEach((word) => {
          const pattern = word; // Direct use without word boundary
          const regex = new RegExp(pattern, "gi");

          let match;
          while ((match = regex.exec(sourceCode.text)) !== null) {
            const startIndex = match.index;
            const endIndex = startIndex + word.length;
            context.report({
              message: `The word "${word}" is disallowed.`,
              loc: sourceCode.getLocFromIndex(startIndex),
            });
          }
        });
      },
    };
  },
};
