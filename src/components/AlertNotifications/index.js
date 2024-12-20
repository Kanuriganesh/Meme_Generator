import './index.css'
import Notification from '../Notification'
import { AiFillCheckCircle } from 'react-icons/ai';
import { RiErrorWarningFill } from 'react-icons/ri';
import { MdWarning, MdInfo } from 'react-icons/md'; // Combined the MdWarning and MdInfo import
import { GrFormClose } from 'react-icons/gr'; // This might be useful later

const userList = [
  {
    icon: AiFillCheckCircle,
    heading: 'Success',
    paragraph: 'You can access all the files in the folder',
    color: 'green',
    dlt: GrFormClose
  },
  {
    icon:RiErrorWarningFill,
    heading: 'Error',
    paragraph: 'Sorry,you are not authorized to have access to delete the file',
    color: 'red',
    dlt: GrFormClose
  },
  {
    icon:MdWarning,
    heading: 'Warning',
    paragraph: 'Viewers of this file can see comments and suggestions',
    color: 'yellow',
    dlt: GrFormClose
  },
  {
    icon: MdInfo,
    heading: 'Info',
    paragraph: 'Anyone on the internet can view these files',
    color: 'lightblue',
    dlt: GrFormClose
  },
]
const AlertNotifications = () => {
  return (
    <div className='first'>
      <h1 className='heading1'>Alert Notifications</h1>
      {
         userList.map((eachItem)=><Notification eachItem={eachItem}/>)
      }
    </div>
  )
}
export default AlertNotifications
