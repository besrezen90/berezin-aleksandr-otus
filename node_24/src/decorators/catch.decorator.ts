import { NotFoundException } from '@nestjs/common';
import { SequelizeScopeError } from 'sequelize/types';

export function CustomCatch(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = async function(...args: any[]) {
    const result = originalMethod.apply(this, args);

    return result.catch((error: SequelizeScopeError) => {
      throw new NotFoundException({
        error: error.name,
        message: error.message,
        statusCode: 404,
      });
    });
  };

  return descriptor;
}
