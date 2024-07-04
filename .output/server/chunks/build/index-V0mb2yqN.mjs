import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("profile.vuqhSA43.png");
const _sfc_main$1 = {
  name: "HeroSection"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" data-v-fc15bd33><section class="hero" data-v-fc15bd33><div class="container" data-v-fc15bd33><div class="main-body" data-v-fc15bd33><div class="topnav" data-v-fc15bd33><a class="active" href="" data-v-fc15bd33>Home</a><a href="~/components/AboutSection.vue/" data-v-fc15bd33>About</a><a href="" data-v-fc15bd33>Project</a><a href="#about" data-v-fc15bd33>Contact</a></div><div class="row gutters-sm" data-v-fc15bd33><div class="col-md-4 mb-3" data-v-fc15bd33><div class="card" data-v-fc15bd33><div class="card-body" data-v-fc15bd33><div class="d-flex flex-column align-items-center text-center" data-v-fc15bd33><img${ssrRenderAttr("src", _imports_0)} alt="Admin" class="rounded-circle" width="150" data-v-fc15bd33><div class="mt-3" data-v-fc15bd33><h4 data-v-fc15bd33>Sevalino Rofiq Ismail</h4><p class="text-secondary mb-1" data-v-fc15bd33>Designer</p><p class="text-muted font-size-sm" data-v-fc15bd33>Halo friends, kenalin aku seva, saat ini aku sangat tertarik dengan hal-hal yang berbau Design</p></div></div></div></div><div class="card mt-3" data-v-fc15bd33><ul class="list-group list-group-flush" data-v-fc15bd33><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline" data-v-fc15bd33><circle cx="12" cy="12" r="10" data-v-fc15bd33></circle><line x1="2" y1="12" x2="22" y2="12" data-v-fc15bd33></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-v-fc15bd33></path></svg>Website</h6><span class="text-secondary" data-v-fc15bd33>http://localhost:3000/</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline" data-v-fc15bd33><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-fc15bd33></path></svg>Github</h6><span class="text-secondary" data-v-fc15bd33>sevalino ismail</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info" data-v-fc15bd33><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-fc15bd33></path></svg>Twitter</h6><span class="text-secondary" data-v-fc15bd33>@sevalinoismail</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger" data-v-fc15bd33><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-fc15bd33></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-fc15bd33></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-fc15bd33></line></svg>Instagram</h6><span class="text-secondary" data-v-fc15bd33>sevalinoismail</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary" data-v-fc15bd33><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-fc15bd33></path></svg>Facebook</h6><span class="text-secondary" data-v-fc15bd33>sevalinoismail</span></li></ul></div></div><div class="col-md-8" data-v-fc15bd33><div class="card mb-3" data-v-fc15bd33><div class="card-body" data-v-fc15bd33><div class="row" data-v-fc15bd33><div class="col-sm-3" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33>Full Name</h6></div><div class="col-sm-9 text-secondary" data-v-fc15bd33> Sevalino Rofiq Ismail </div></div><hr data-v-fc15bd33><div class="row" data-v-fc15bd33><div class="col-sm-3" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33>Email</h6></div><div class="col-sm-9 text-secondary" data-v-fc15bd33> sevalinoismail@students.amikom.ac.id </div></div><hr data-v-fc15bd33><div class="row" data-v-fc15bd33><div class="col-sm-3" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33>Phone</h6></div><div class="col-sm-9 text-secondary" data-v-fc15bd33> (+62) 895392224931 </div></div><hr data-v-fc15bd33><div class="row" data-v-fc15bd33><div class="col-sm-3" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33>University</h6></div><div class="col-sm-9 text-secondary" data-v-fc15bd33> Universitas Amikom Yogyakarta </div></div><hr data-v-fc15bd33><div class="row" data-v-fc15bd33><div class="col-sm-3" data-v-fc15bd33><h6 class="mb-0" data-v-fc15bd33>Address</h6></div><div class="col-sm-9 text-secondary" data-v-fc15bd33> Kraton Yogyakarta </div></div><hr data-v-fc15bd33><div class="row" data-v-fc15bd33></div></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fc15bd33"]]);
const _sfc_main = {
  components: {
    HeroSection: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-V0mb2yqN.mjs.map
