const imgWrapper = {
  render: 'div',
  description: 'wrap a image in a div',
  attributes: {
    class: {
      type: String,
      default: 'cmp-img-container',
    },
  },
};
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
  attributes: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
};

export const tags = {
  imgWrapper: imgWrapper,
  imgRoot: imgRoot,
  imgLink: imgLink,
};
