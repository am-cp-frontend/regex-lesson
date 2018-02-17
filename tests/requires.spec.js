const requires = require('../solutions/requires')

describe('requires', () => {
    it('Matches only the right parts of the snippet', () => {
      let snippet = `
        require('a'), require('b');
        require("node-require")
        let foo = {}
        foo.require = () => {}
        foo.require('lils')
        const module = require("./path/to/module.js")
      `

      let matches, modules = []
      while ((matches = requires.exec(snippet)) !== null) {
          modules.push(matches[1])
      }

      expect(modules)
        .toEqual(['a', 'b', 'node-require', './path/to/module.js'])
    })
})
