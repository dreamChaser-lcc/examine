import allApi from './allApi'
import operateApi from './operateApi'
import publicApi from './publicApi'
import systemApi from './systemApi'

export default {
  ...allApi,
  ...operateApi,
  ...systemApi, 
  ...publicApi,
}