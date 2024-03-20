IncomingMessage {
  socket: <ref *1> Socket {
    parser: HTTPParser {
      '0': null,
      '1': [Function: parserOnHeaders],
      '2': [Function: parserOnHeadersComplete],
      '3': [Function: parserOnBody],
      '4': [Function: parserOnMessageComplete],
      '5': [Function: bound onParserExecute],
      '6': [Function: bound onParserTimeout],
      _headers: [],
      _url: '',
      socket: [Circular *1],
      incoming: [Circular *2],
      outgoing: null,
      maxHeaderPairs: 2000,
      _consumed: true,
      onIncoming: [Function: bound parserOnIncoming],
      joinDuplicateHeaders: null,
      [Symbol(resource_symbol)]: [HTTPServerAsyncResource]
    },
    _httpMessage: ServerResponse {
      outputData: [],
      outputSize: 0,
      _contentLength: null,
      _hasBody: true,
    },

    },
  },
  complete: false,
  rawHeaders: [
    'Host',
    'localhost:3000',
    'User-Agent',
    'curl/8.4.0',
    'Accept',
    '*/*'
  ],
  url: '/toppings',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  next: [Function: next],
  baseUrl: '',
  originalUrl: '/toppings',
  _parsedUrl: Url {
    pathname: '/toppings',
    path: '/toppings',
    href: '/toppings',
    _raw: '/toppings'
  },
  params: {},
  query: {},
  [Symbol(kHeaders)]: { host: 'localhost:3000', 'user-agent': 'curl/8.4.0', accept: '*/*' },
}
