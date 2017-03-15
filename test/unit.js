/*eslint no-console: ["error", { allow: ["warn", "log", "error"] }] */

import { expect } from 'chai'
import Flotsam from '../src/flotsam'

describe('Unit', () => {

  describe('constructor', () => {

    it('should return new flotsam object', () => {
      const flotsam = new Flotsam()

      expect(flotsam).to.be.an('object')
      expect(flotsam).to.be.instanceof(Flotsam)
    })

  })

})
