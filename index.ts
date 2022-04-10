import express from 'express'
import TemplateFactory from './src/FactoryTemplate/TemplateFactory';
const app = express();
// Get example
const router: express.Router = express.Router()
router.get('/api/getTest', (req, res) => {

  //TemplateFactory.getTemplate("employee").Save({});
  //TemplateFactory.getTemplate("employee").get();


  res.send("hello world")
})

app.use(router)
app.listen(3000, () => { console.log('FLEX-TEX (Flex TemplateForExcel) app listening on port 3000') })