import services from '@/services';
import Vue from 'vue';
import { accessorType } from '@/store';

declare module '*.vue' {
    export default Vue;
}

declare module 'vue/types/vue' {
    interface Vue {
        $services: ReturnType<typeof services>;
        $bvModal: any;
        $accessor: typeof accessorType;
    }
}

declare module '@nuxt/types' {
    interface NuxtAppOptions {
        $services: ReturnType<typeof services>;
        $bvModal: any;
        $accessor: typeof accessorType;
    }
}
