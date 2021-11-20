# Node.js TypeScript back-end boilerplate/scaffolding

Shallow clone and rename all references to `backend-base`:

```
git clone git@github.com:erwinv/backend-base.git --depth=1 <api-name>
grep -rl backend-base <api-name> | xargs sed -i s/backend-base/<api-name>/g
```

Batteries included:

- Koa
- Jest
- MongoDB (Mongoose)
- PostgreSQL (Objection + Knex)
- Redis (IO Redis)
- Docker
