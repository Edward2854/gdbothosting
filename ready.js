
    const clientUser = new ClientUser(client, data.user);
    client.user = clientUser;
    client.readyTime = Date.now();
    client.users.set(clientUser.id, clientUser);
    for (const guild of data.guilds) {
      client.dataManager.newGuild(guild);
