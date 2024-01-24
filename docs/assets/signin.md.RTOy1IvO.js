import{_ as e,c as i,o as a,V as t}from"./chunks/framework.2xniYgV0.js";const f=JSON.parse('{"title":"Sign In","description":"","frontmatter":{},"headers":[],"relativePath":"signin.md","filePath":"signin.md"}'),o={name:"signin.md"},l=t('<h1 id="sign-in" tabindex="-1">Sign In <a class="header-anchor" href="#sign-in" aria-label="Permalink to &quot;Sign In&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Le Sign In permet à l&#39;utilisateur de se connecter à la plateforme. Le Sign In fait partie du processus d&#39;authentification de l&#39;utilisateur.</p><p><strong>SFC</strong> : <code>/app/pages/LoginPage.vue</code>.</p><h3 id="script" tabindex="-1">Script <a class="header-anchor" href="#script" aria-label="Permalink to &quot;Script&quot;">​</a></h3><p>La variable <code>loginModel</code> contient l&#39;ensemble des données du formulaire.</p><p>La variable <code>loginFormRules</code> contient les règles de validation pour chacun des champs du formulaire.</p><p>La fonction <code>onSubmit</code> est la fonction qui doit être appelé lorsque l&#39;<em>event</em> <code>submit</code> du formulaire est émis.</p><h3 id="template" tabindex="-1">Template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;Template&quot;">​</a></h3><p>Contient un formulaire de la <a href="https://element-plus.org/en-US/component/form.html" target="_blank" rel="noreferrer">librairie Vue Element</a> tel que décrit dans la section de <a href="/signup.html">Sign Up</a>.</p><h2 id="level-i" tabindex="-1">Level I <a class="header-anchor" href="#level-i" aria-label="Permalink to &quot;Level I&quot;">​</a></h2><ol><li>Rajouter les champs du formulaire.</li><li>Rajouter toutes les règles de validation, ainsi que les messages appropriés (2 règles pour le <em>username</em>, une pour le <em>password</em>).</li><li>Appeler la fonction <code>onSubmit</code> chaque fois que l&#39;évènement <code>submit</code> est émis par le formulaire <code>el-form</code>.</li><li>Utilisez l&#39;<code>AuthenticationService</code> pour authentifier l&#39;utilisateur.</li><li>Redirigez l&#39;utilisateur sur <code>/app</code> en cas de succès.</li></ol><h2 id="level-ii" tabindex="-1">Level II <a class="header-anchor" href="#level-ii" aria-label="Permalink to &quot;Level II&quot;">​</a></h2><ol><li>Affichez un message d&#39;erreur si le <em>Sign In</em> a échoué.</li></ol>',14),r=[l];function n(s,c,d,u,p,m){return a(),i("div",null,r)}const g=e(o,[["render",n]]);export{f as __pageData,g as default};