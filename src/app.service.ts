import { Injectable } from '@nestjs/common';
import ImageKit = require('imagekit');
import jwt = require('jsonwebtoken');

@Injectable()
export class AppService {
  getHello(): Record<string, any> {
    const imageKit = new ImageKit({
      publicKey: 'public_3dyqiwVutyh20C/+Y/NPQKjMn8U=',
      privateKey: 'private_t9s8CZN63slgP+kPNhRDPad1xjo=',
      urlEndpoint: 'https://ik.imagekit.io/your_imagekit_id/',
    });

    return imageKit.getAuthenticationParameters();
  }

  upload(req: Record<string, any>) {
    const payload = req.body;
    console.log(
      '🚀 ~ file: app.service.ts:19 ~ AppService ~ upload ~ payload:',
      payload,
    );
    const token = jwt.sign(
      payload.uploadPayload,
      'private_ucQkxkdkoQ21N1A6LACdhEEYcZg=',
      {
        expiresIn: payload.expire,
        header: {
          alg: 'HS256',
          typ: 'JWT',
          kid: payload.publicKey,
        },
        // noTimestamp: true,
      },
    );
    console.log(
      '🚀 ~ file: app.service.ts:32 ~ AppService ~ upload ~ token:',
      token,
    );

    return { token };
  }
}
