import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'login',
  alias: ['l'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      //   parameters,
      //   template: { generate },
      //   signIn,
      print: { info }
    } = toolbox

    // const name = parameters.first

    // await generate({
    //   template: 'model.ts.ejs',
    //   target: `models/${name}-model.ts`,
    //   props: { name }
    // })

    info(`Generated file at models/${name}-model.ts`)
  }
}
