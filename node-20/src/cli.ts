const { build } = require('gluegun')

async function run(argv) {
  const cli = build()
    .brand('My favorite film list')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'node-20-*', hidden: true })
    .help()
    .version()
    .create()

  const toolbox = await cli.run(argv)

  return toolbox
}

module.exports = { run }
