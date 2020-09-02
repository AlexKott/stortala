import { Server, Model } from 'miragejs';

import { newMessageText } from 'constants/texts';

export default (useSeeds = false) => {
  new Server({
    identityManagers: {
      application: IntegerIDManager,
    },
    models: {
      author: Model,
      message: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('/authors', schema => schema.all('author'));
      this.get('/messages', schema => schema.all('message'));

      this.post('/authors', (schema, request) => {
        const props = JSON.parse(request.requestBody);

        return schema.create('author', {
          name: props.name,
        });
      });

      this.post('/messages', (schema, request) => {
        const props = JSON.parse(request.requestBody);

        return schema.create('message', {
          created: (new Date()).getTime(),
          authorId: props.authorId,
          parentId: props.parentId,
          text: props.text || newMessageText,
        });
      });

      this.delete('/messages/:id', (schema, request) => {
        const id = request.params.id;

        return schema.find('message', id).destroy();
      });

      this.patch('/messages/:id', (schema, request) => {
        const id = request.params.id;
        const props = JSON.parse(request.requestBody);

        const message = schema.find('message', id);

        return message.update(props);
      });
    },

    seeds(server) {
      if (useSeeds) {
        server.create('author', {
          name: 'Tom',
          image: 'https://pbs.twimg.com/profile_images/757516655266238464/F7Xr_ain_400x400.jpg',
        });
        server.create('author', {
          name: 'Bob',
          image: 'https://pbs.twimg.com/profile_images/585982031567421440/kKsp_kIp_400x400.jpg',
        });

        server.create('message', {
          created: 1598646015445,
          text: 'What\'s he building in there?',
          authorId: 1,
          parentId: null,
        });
        server.create('message', {
          created: 1598757195445,
          text: 'A playhouse for the children?',
          authorId: 2,
          parentId: 1,
        });
        server.create('message', {
          created: 1598957295445,
          text: 'You won\'t believe what Mr. Sticha saw',
          authorId: 1,
          parentId: 1,
        });
      }
    },
  });
};

/*** Source: https://stackoverflow.com/a/61335267/7584846 ***/
class IntegerIDManager {
  constructor() {
    this.ids = new Set();
    this.nextId = 1;
  }
  fetch() {
    let id = this.nextId++;
    this.ids.add(id);

    return id;
  }
  set(id) {
    if (this.ids.has(id)) {
      throw new Error('ID ' + id + 'has already been used.');
    }

    this.ids.add(id);
  }
  reset() {
    this.ids.clear();
  }
}
