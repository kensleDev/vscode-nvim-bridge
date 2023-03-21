// if args is of type string, convert to object based on index
// Index must match with schema key

export function argParser(args: unknown, schema: any) {
    console.log({ args });

    if (typeof args === 'string') {
        const _args: Record<string, any> = {};
        const schemaObjectKeys = schema._getCached().keys;
        const splitArgs = args.split(', ');
        schemaObjectKeys.forEach((key: string, i: number) => _args[key] = splitArgs[i]);
        console.log({ processedArgs: _args });
        return _args;
    };

    return args;
}