import {Request,Response} from 'express';
import db from '../database/connection';
import timestampUTC from '../utils/timestampUTC';

export default class ConnectionsController {
  async index (request: Request, response: Response){
  
    const totalConnections = await db('connections').count('* as total');

    const {total}=totalConnections[0];

    return response.json({total});
  }
  
  async create (request: Request, response: Response){
    
    const created_at=timestampUTC()    
    const {user_id}=request.body;

    await db('connections').insert({
      user_id,
      created_at
    });
    
    return response.status(201).send();
  }
}