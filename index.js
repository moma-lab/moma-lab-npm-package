/**
 * Boolean validation of a passed parameter.
 *
 * @param {*} name A parameter to be validated by the function.
 * @return {booloean} true on successful validation, false otherwise.
 */
function isPackageOwner(name) {
  return name === 'moma-lab'; // boolean return
}

// export
module.exports = isPackageOwner;
