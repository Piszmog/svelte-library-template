<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";
    import Header from "../Header.svelte";
</script>

<Meta
        title="Example/Header"
        component={Header}
        argTypes={{
            value: {control: 'text'}
  }}
/>

<Template let:args>
    <Header
            {...args}
    />
</Template>

<Story
        name="Default"
        args={{
    value: 'Hello',
  }}
/>
