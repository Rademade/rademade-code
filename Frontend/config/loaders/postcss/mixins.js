module.exports = {
  "text-overflow": {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },


  "box-styles": {
    position: 'relative',
    background: '#FFFFFF',
    boxShadow: '0 4px 50px 0 rgba(0,0,0,0.10)',
    borderRadius: '4px',
    overflow: 'hidden',
    boxSizing: 'border-box'
  },

  "box-styles-line": {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '4px',
    backgroundImage: 'linear-gradient(90deg, #9FBC3A 0%, #00A99C 31%, #006EA7 68%, #009EE1 100%)',
  },

  "box-clear": {
    display: 'table',
    content: "''",
    clear: 'both'
  }

};