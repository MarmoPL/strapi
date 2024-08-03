module.exports = ({ env }) => ({
  "custom-api": {
    enabled: true,
  },
  io: {
    enabled: true,
    config: {
      // This will listen for all supported events on the article content type
      contentTypes: ["*"],

      socket: {
        serverOptions: {
          cors: {
            // origin: ["*", "http://localhost:1337", "http://localhost:3001"],
            origin: "*",
            methods: ["GET", "POST"],
          },
        },
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});