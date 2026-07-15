


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

require(`datejs`)

function combineUsers(...userArrays) {
  const users = [].concat(...userArrays)
  const merge_date = Date.today().toString("M/d/yyyy")

  return {users, merge_date}
}

module.exports = {
  ...(typeof combineUsers !== `undefined`&& {combineUsers})
}