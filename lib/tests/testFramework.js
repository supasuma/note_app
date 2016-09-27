function describe(description, itBlock) {
  console.log("DESCRIPTION: " + description);
  beforeEachBlock = Function;
  itBlock();
}

function beforeEach(block){
  beforeEachBlock = block;
}

function it(description, test) {
  console.log('   IT: ' + description);
  beforeEachBlock();
  test();
}

function expect(matcher) {
  console.log('     '+matcher);
}
