import express from "express";
import { Channel, Trending, aboutchannel, playlist, searchvideoplaylist, videocomment, videoinfo, videorelated } from "../controller/youtubecontroller.js";

var router = express.Router();

router.get('/about-channel',aboutchannel);
router.get('/Channel',Channel);
router.get('/videorelated',videorelated)
router.get('/videocomment',videocomment);
router.get('/Trending',Trending);
router.get('/videoinfo',videoinfo);
router.get('/playlist',playlist);
router.get('/searchvideoplaylist',searchvideoplaylist)


export default router;