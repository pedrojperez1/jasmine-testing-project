describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });


  afterEach(function() {
    allServers = {};
  });
});

describe('Servers table test', function() {
  beforeEach(function() {
    allServers = {
      server1: { serverName: "Alice" },
      server2: { serverName: "Bob" }
    };
  });
  
  it('should add a new row to server table for each server in allServers', function () {
    updateServerTable();
    expect(serverTbody.children.length).toEqual(2);
  });

  afterEach(function() {
    serverNameInput.value = '';
    allServers = {};
    serverTbody.innerHTML = '';
  });
})