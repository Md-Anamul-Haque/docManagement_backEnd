import add_doc from './action_files/add_doc'
import delete_doc from './action_files/delete_doc'
import get_doc from './action_files/get_doc'
import get_inks from './action_files/get_inks'
import update_doc from './action_files/update_doc'
import SetSignIn from './SetSignIn'
const DocHandler = {
    add: add_doc,
    get: get_doc,
    update: update_doc,
    delete: delete_doc
}
const linksHandler = {
    get: get_inks,
}

export { DocHandler, linksHandler, SetSignIn }

