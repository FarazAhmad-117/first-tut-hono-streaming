import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { config } from 'dotenv';
config();

const app = new Hono()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/app',(c) => {
  return c.json({message:"Hello"},200);
})

const port = Number.parseInt(process.env.PORT ?? '3000') ;
console.log(`Server is running on  http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
