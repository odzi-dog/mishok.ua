import { ClientOptions, GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const GrpcServerOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'dog.odzi.mishok.v1',
    protoPath: [join(__dirname, './assets/protos/v1/tokens.proto')],
    url: 'localhost:3000',
  },
};
