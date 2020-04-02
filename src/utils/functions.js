/**
 * @dependence '_' from 'lodash'
 * @param {Array} data An array of the data you want to filter
 * @param {String} text Equivalent to the filter's SearchText
 * @param {String} propName1 First prop name to search for in object from provided data
 * @param {String} propName2 Second prop name to search for in object from provided data
 * @param {String} propName3 Third prop name to search for in object from provided data
 * @returns {Array<Object>} Returns an array of the input's filtered data by all the input's propNames
 */
export const FilterData = (data, text, propName1, propName2, propName3) => {
  let FilteredData = [];
  if (text === "") {
    FilteredData = data;
  } else {
    const filter = text.toUpperCase();
    let results = data.filter(item => {
      return _.includes(item[propName1].toUpperCase(), filter);
    });
    if (results === "" || (results === undefined && propName2)) {
      results = data.filter(item => {
        return _.includes(item[propName2].toUpperCase(), filter);
      });
      if (results === "" || (results === undefined && propName3)) {
        results = data.filter(item => {
          return _.includes(item[propName3].toUpperCase(), filter);
        });
      }
    }
    FilteredData = results;
  }
  return FilteredData;
};
