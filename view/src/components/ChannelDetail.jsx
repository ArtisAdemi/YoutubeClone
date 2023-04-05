import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos, ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromApi";
import zIndex from "@mui/material/styles/zIndex";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState (null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  console.log(channelDetail)
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return (
    <Box minHeight="95vh">
      <Box>
        <div 
        style={{
          background:'linear-gradient(39deg, rgba(45,3,3,1) 0%, rgba(91,4,12,1) 50%, rgba(196,0,0,1) 100%)',
          zIndex: 10,
          height: '300px'

        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: {sm: '100px'}}} />
            <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail