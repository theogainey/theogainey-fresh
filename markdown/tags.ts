const imgLink = {
  render: 'a',
  description: 'wrap a image in a link',
  attributes: {
    href: {
      type: String,
      default: '',
    },
  },
};
const imgRoot = {
  render: 'img',
  description: 'img root',
  selfClosing: true,
  attributes: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    class: {
      type: String,
      default: 'cmp-image',
    },
  },
};

const codeInline = {
  render: 'code',
  description: 'code inline',
  attributes: { class: { type: String, default: 'cmp-inline-code' } },
};

const codeWrapper = {
  render: 'code',
  description: 'code wrapper',
  attributes: { class: { type: String, default: 'cmp-code' } },
};

const codeComment = {
  render: 'span',
  description: 'line comment of code',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__comment',
    },
  },
};

const codeLineNum = {
  render: 'span',
  description: 'line number of code',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__line-num',
    },
  },
};

const codeKeyword = {
  render: 'span',
  description: 'code keyword',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__keyword',
    },
  },
};

const codeKeywordBlue = {
  render: 'span',
  description: 'code keyword',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__keyword cmp-code__keyword--blue',
    },
  },
};

const codeString = {
  render: 'span',
  description: 'code string',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__string',
    },
  },
};

const codeNumber = {
  render: 'span',
  description: 'code number',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__number',
    },
  },
};

const codeBoolean = {
  render: 'span',
  description: 'code boolean',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__boolean',
    },
  },
};

const codeFunction = {
  render: 'span',
  description: 'code function',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__function',
    },
  },
};

const codeOperator = {
  render: 'span',
  description: 'code operator',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__operator',
    },
  },
};

const codePunctuation = {
  render: 'span',
  description: 'code punctuation',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__punctuation',
    },
  },
};

const codePunctuationYellow = {
  render: 'span',
  description: 'code punctuation',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__punctuation--yellow',
    },
  },
};

const codePunctuationBlue = {
  render: 'span',
  description: 'code punctuation',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__punctuation--blue',
    },
  },
};

const codePunctuationPurple = {
  render: 'span',
  description: 'code punctuation',
  attributes: {
    class: {
      type: String,
      default: 'cmp-code__punctuation--purple',
    },
  },
};



// TODO: write transform function to transform code block to custom tags and maybe render them depends on how markdoc works
export const tags = {
  imgRoot: imgRoot,
  imgLink: imgLink,
  codeInline: codeInline,
  codeWrapper: codeWrapper,
  codeKeyword: codeKeyword,
  codeKeywordBlue: codeKeywordBlue,
  codeLineNum: codeLineNum,
  codeComment: codeComment,
  codeString: codeString,
  codeNumber: codeNumber,
  codeBoolean: codeBoolean,
  codeFunction: codeFunction,
  codeOperator: codeOperator,
  codePunctuation: codePunctuation,
  codePunctuationYellow: codePunctuationYellow,
  codePunctuationBlue: codePunctuationBlue,
  codePunctuationPurple: codePunctuationPurple,
};
