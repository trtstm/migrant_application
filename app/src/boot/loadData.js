import { setLocale } from './i18n'

export default async ({ store, Vue }) => {
    //    await store.dispatch('statistics/fetchStatistics');
    await store.dispatch('features/fetchFeatures');
    await store.dispatch("language/fetchActiveLanguages")
    await store.dispatch('settings/fetchSettings')
        .then(settings => {
            console.log("#####################################")
            console.log(settings)
            var curlang = settings.filter((setting) => { return setting.key == 'default_language' })[0]
            setLocale(curlang.value)
            var defaultLangString = store.state.language.languages.filter(function (l) { return l.lang == curlang.value })[0].name
            Vue.prototype.$defaultLangString = defaultLangString
        })


}

