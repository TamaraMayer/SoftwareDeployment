const { assert } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../server');

//Our parent block
describe('Number Evaluator API Tests', () => {

 describe('/GET Evaluator ISEVEN Method', () => {
     it('it should evaluate that a number is even', (done) => {
     chai.request(server)
       .get('/evaluator/isEven/2')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             assert.equal(res.body.IsEven,true);
             done();
          });
       });
  });

  describe('/GET Evaluator ISEVEN Method', () => {
   it('it should evaluate that a number is not even', (done) => {
   chai.request(server)
     .get('/evaluator/isEven/3')
     .end((err, res) => {
           (res).should.have.status(200);
           (res.body).should.be.a('object');
           assert.equal(res.body.IsEven,false);
           done();
        });
     });
   });

   describe('/GET Evaluator ISODD Method', () => {
      it('it should evaluate that a number is not odd', (done) => {
      chai.request(server)
        .get('/evaluator/isOdd/8')
        .end((err, res) => {
              (res).should.have.status(200);
              (res.body).should.be.a('object');
              assert.equal(res.body.IsOdd,false);
              done();
           });
        });
   });

   describe('/GET Evaluator ISODD Method', () => {
      it('it should evaluate that a number is odd', (done) => {
      chai.request(server)
        .get('/evaluator/isOdd/11')
        .end((err, res) => {
              (res).should.have.status(200);
              (res.body).should.be.a('object');
              assert.equal(res.body.IsOdd,true);
              done();
           });
        });
   });

   describe('/GET Evaluator ISPRIME Method', () => {
      it('it should evaluate that a number is a prime number', (done) => {
      chai.request(server)
        .get('/evaluator/isPrime/13')
        .end((err, res) => {
              (res).should.have.status(200);
              (res.body).should.be.a('object');
              assert.equal(res.body.IsPrime,true);
              done();
           });
        });
   });

   describe('/GET Evaluator ISPRIME Method', () => {
      it('it should evaluate that a number is not a prime number', (done) => {
      chai.request(server)
        .get('/evaluator/isPrime/110')
        .end((err, res) => {
              (res).should.have.status(200);
              (res.body).should.be.a('object');
              assert.equal(res.body.IsPrime,false);
              done();
           });
        });
   });

});