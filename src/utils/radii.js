/**
 * Utility for extracting border radii props from components
 */

const radii = (props, r) => {
  r = r || 2; // borderRadius

  const {
    rounded,
    pill,
    circle
  } = props || {};

  let borderRadius;

  if (rounded === true) {
    borderRadius = r;
  } else if (rounded === false) {
    borderRadius = 0;
  }

  if (typeof rounded === 'string') {
    const obj = {
      top: `${r}px ${r}px 0 0`,
      right: `0 ${r}px ${r}px 0`,
      bottom: `0 0 ${r}px ${r}px`,
      left: `${r}px 0 0 ${r}px`
    };
    borderRadius = obj[rounded] || null;
  }

  if (pill || circle) {
    borderRadius = 99999;
  }

  if (typeof borderRadius === 'undefined') {
    return {};
  }
  return { borderRadius };
};

export default radii;
