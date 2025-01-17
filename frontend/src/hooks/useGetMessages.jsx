import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const useGetMessages = () => {
    
    const {selectedUser} = useSelector((store)=>store.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchMessages = async () => {
            try {
                if(!selectedUser || !selectedUser._id) return
                axios.defaults.withCredentials=true
                const response = await axios.get(`http://localhost:8080/api/v1/message/receive/${selectedUser._id}`)
                // console.log(`Messages for ${selectedUser._id}`, response.data.data)  
                dispatch(setMessages(response.data.data))

            } catch (error) {
                console.log(error)
            }
            
        }
        fetchMessages()
    },[selectedUser])
}   

export default useGetMessages