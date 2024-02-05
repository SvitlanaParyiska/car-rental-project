const getCustomStyles = {
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
    border: `none`,
    borderRadius: '14px',
    marginTop: '8px',
    outline: 'none',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '0',
    border: 'none',
    margin: '0px',
  }),

  menu: defaultStyles => ({
    ...defaultStyles,
    paddingTop: '14px',
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),

  placeholder: provided => ({
    ...provided,
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.11',
    color: '#121417',
  }),

  dropdownIndicator: (provided, props) => ({
    ...provided,
    color: '#121417',
    transform: props.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export const brandCustomStyle = {
  ...getCustomStyles,

  control: provided => ({
    ...provided,
    padding: '6px 6px 6px 18px',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#121417',
    backgroundColor: '#f7f7fb',
    borderRadius: ' 14px',
    width: '224px',
    height: '48px',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    '&, &:is(:hover, :focus)': {
      outline: 'none',
      border: 'none',
    },
  }),

  menuList: base => ({
    ...base,
    margin: '0px',
    padding: '0px',
    borderRadius: '14px',
    border: 'none',
    overflowY: 'auto',
    paddingLeft: '6px',
    paddingTop: '8px',
    width: `calc(100% - 7px)`,
    '& > div:last-child': {
      paddingBottom: '14px',
    },
    maxHeight: '272px',

    '::-webkit-scrollbar': {
      width: '8px',
      height: '130px',
    },
    '::-webkit-scrollbar-track': {
      background: '#fff',
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

export const priceCustomStyle = {
  ...getCustomStyles,
  control: provided => ({
    ...provided,
    padding: '6px 6px 6px 18px',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#121417',
    backgroundColor: '#f7f7fb',
    borderRadius: ' 14px',
    width: '125px',
    height: '48px',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    '&, &:is(:hover, :focus)': {
      outline: 'none',
      border: 'none',
    },
  }),

  menuList: base => ({
    ...base,
    margin: '0px',
    padding: '0px',
    borderRadius: '14px',
    border: 'none',
    overflowY: 'auto',
    paddingLeft: '6px',
    paddingTop: '8px',
    width: `calc(100% - 7px)`,
    '& > div:last-child': {
      paddingBottom: '14px',
    },
    maxHeight: '188px',

    '::-webkit-scrollbar': {
      width: '8px',
      height: '130px',
    },
    '::-webkit-scrollbar-track': {
      background: '#fff',
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
