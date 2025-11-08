declare module '@apiverve/passwordgenerator' {
  export interface passwordgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface passwordgeneratorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class passwordgeneratorWrapper {
    constructor(options: passwordgeneratorOptions);

    execute(callback: (error: any, data: passwordgeneratorResponse | null) => void): Promise<passwordgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: passwordgeneratorResponse | null) => void): Promise<passwordgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<passwordgeneratorResponse>;
  }
}
