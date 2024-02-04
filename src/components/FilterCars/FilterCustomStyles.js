const getCustomStyles = {
  control: provided => ({
    ...provided,
    padding: '6px 12px',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#121417',
    backgroundColor: '#f7f7fb',
    borderRadius: ' 14px',
    width: '224px',
    height: '48px',
    border: '0px solid black',
    outline: 'none',
    boxShadow: 'none',
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: isSelected ? '#121417' : 'rgba(18, 20, 23, 0.2)',
    paddingBottom: '5px',
    border: 'none',
  }),
  container: provided => ({
    ...provided,
    border: '1px solid rgba(239, 237, 232, 0.30)',
    borderRadius: '12px',
    outline: 'none',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',

    border: 'none',
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.11',
    color: '#121417',
  }),
  menuList: base => ({
    ...base,
    borderRadius: '14px',
    border: 'none',
    overflowY: 'scroll',
    paddingLeft: '6px',
    paddingTop: '8px',
    width: '224px',
    maxHeight: '272px',
    '& > div:last-child': {
      paddingBottom: '14px',
    },
    '::-webkit-scrollbar': {
      width: '8px',
      height: '130px',
    },
    '::-webkit-scrollbar-track': {
      background: '#fff',
      marginRight: '8px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(18, 20, 23, 0.05)',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),
};

export default getCustomStyles;
