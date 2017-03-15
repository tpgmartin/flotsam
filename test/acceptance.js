/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */

import { expect } from 'chai'
import * as constants from '../src/constants'
import Flotsam from '../src/flotsam'

describe('Acceptance', () => {

  describe('setLevel', () => {

    it('should set global logger level', () => {
      const flotsam = new Flotsam()

      flotsam.setLevel(constants.DEBUG)

      expect(flotsam.filterLevel).to.be.an('object')
      expect(flotsam.filterLevel.value).to.equal(1)
    })

  })

})
