export default ({ palette }) => ({
  'html, body, #root': {
    height: '100%'
  },
  'html, body': {
    fontSize: 14,
    lineHeight: 1.5,
    color: palette.default,
    fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", sans-serif'
  },
  p: {
    marginTop: 0
  },
  '.btn+.btn': {
    marginLeft: 10
  }
});
