import { storiesOf } from '@storybook/vue';


storiesOf('Welcome', module)
    .addParameters({ options: { showPanel: false, isToolshown: false } })
    .add('Welcome', () => ({
        template: `
        <div class="m-sandboxes m-welcome">
    <p>
        <img style="width: 70%"
             src="./logo-modul-fond-pale.png"
             alt="modul_logo" />
    </p>
    <h1>Welcome to storybook for modUL</h1>
    <p>
        Here you will find here everything you need to test and interact with mod<strong>UL</strong> component.
    </p>
    <h2>Usefull ressources</h2>

    <ul>
        <li><a href="https://github.com/ulaval"
               target="_blank">Github repository</a></li>
        <li><a href="https://ulaval.github.io/modul/"
               target="_blank">Website documentation</a></li>
        <li><a href="https://github.com/ulaval/modul-components/blob/develop/.github/CONTRIBUTING.md"
               target="_blank">Contributing Guide</a></li>
    </ul>
    <h3>Internal ressources (DTI specific)</h3>
    <ul>
        <li><a href="https://wiki.dti.ulaval.ca/pages/viewpage.action?pageId=70553254"
               target="_blank">Confluence space (french)</a></li>
        <li><a href="https://wiki.dti.ulaval.ca/pages/viewpage.action?pageId=96701239"
               target="_blank">Code review control list (french)</a></li>
        <li><a href="http://develop-ul-modul-dv01.pca.svc.ulaval.ca/"
               target="_blank">Storybook (develop branch)</a></li>
        <li><a href="https://teams.microsoft.com/l/team/19%3ae43fa12cf4fa466799bb1a2c23f93181%40thread.skype/conversations?groupId=19f1ffc2-368d-4eaf-8be6-fb33f21fa704&tenantId=56778bd5-6a3f-4bd3-a265-93163e4d5bfe"
               target="_blank">Microsoft Teams channel link</a></li>
    </ul>
</div>
`
    }));
