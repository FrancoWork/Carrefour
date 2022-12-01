const sites = [
    {
        "Alfresco": "Alfresco",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "ARS 4.1": "ARS 4.1",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Digital Transaction": "Digital Transaction",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Gestor Documental": "Gestor Documental",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Turnero": "Turnero",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Aplicación Mobile ": "Aplicación Mobile ",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Bringo": "Bringo",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Factura Electrónica": "Factura Electrónica",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Salesforce": "Salesforce",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    },
    {
        "Alfresco": "Alfresco",
        "Descripción": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure harum, quaerat ad rem eum nam aliquid voluptate architecto quae repellat hic aliquam, ab, tempora optio veniam ipsa fugiat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt iste. Fugit nam rem accusantium est amet temporibus, rerum quibusdam quia incidunt corporis fuga, perspiciatis quod deserunt dolor perferendis nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi inventore, laboriosam nostrum consequatur sunt repellat sit consectetur mollitia odit ipsum nulla nemo delectus sapiente quibusdam porro voluptas quod provident blanditiis"
    }
];
module.export = sites;
