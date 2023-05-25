import express from "express";
const order = express.Router()
import { newOrder, getList } from '../Controllers/controller.js'


order.get('/',getList)
order.post('/',newOrder)

export default order