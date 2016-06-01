import React, { PropTypes } from 'react';
import radium from 'radium';


const Subheader = ({
  children,
  style,
  position,
  ...other
}, { theme }) => {
  const { palette, spacing } = theme;
  const styles = {
    root: {
      boxSizing: 'border-box',
      width: '100%',
      fontSize: '1rem',
      color: palette.default,
      textAlign: position,
      fontWeight: 600,
      padding: spacing.verticalPadding
    }
  };

  const sx = [styles.root];

  if (style) {
    sx.push(style);
  }

  return (
    <div {...other} style={sx}>
      {children}
    </div>
  );
};

Subheader.propTypes = {
  children: PropTypes.node,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.object
};

Subheader.contextTypes = {
  theme: PropTypes.object
};

export default radium(Subheader);
