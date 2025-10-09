<script>
	import {
        Section,
		Scroller,
		ScrollerSection,
        Container,
        Em
	} from '@onsvisual/svelte-components';

	const scrollerColors = ['#ddd', '#777', '#222'];
	let scrollerColor = scrollerColors[0];
    let containerElement
    // Make sure this is reactive
    $: console.log("scrollerColor updated to:", scrollerColor);
    let index;
</script>

<div bind:this={containerElement} style="height: 100vh; overflow-y: auto; position: relative;border: 2px solid blue;">
<Scroller
			id="scroller"
			splitscreen
			on:change={(e) => {
				scrollerColor = scrollerColors[e.detail.index];
                index=e.detail.index
				console.debug("change", e, scrollerColor);
			}}
			on:enter={(e) => console.debug("enter", e)}
			on:exit={(e) => console.debug("exit", e)}
            container={containerElement}
            threshold={1}
		>
			<div slot="background">
				<Container width="full" background={scrollerColor} height="100vh"/>
			</div>
			<div slot="foreground">
				<ScrollerSection style="min-height: 600px; background: rgba(255,0,0,0.1);">
					<p>
						When this first caption is visible, the background will appear <Em
							color={scrollerColors[0]}>light grey</Em
						>.
					</p>
				</ScrollerSection>
				<ScrollerSection style="min-height: 600px; background: rgba(255,0,0,0.1);">
					<p>
						When this section caption is visible, the background will appear <Em
							color={scrollerColors[1]}>dark grey</Em
						>.
					</p>
				</ScrollerSection>
				<ScrollerSection style="min-height: 600px; background: rgba(255,0,0,0.1);">
					<p>
						When this third caption is visible, the background will appear <Em
							color={scrollerColors[2]}>black</Em
						>.
					</p>
				</ScrollerSection>
			</div>
		</Scroller>
        <Section title="Yet another section title">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</Section>
</div>
<p>
Faucibus rhoncus nostra sodales. Praesent maecenas dis erat rutrum lorem penatibus ultricies mi integer. Ultricies molestie natoque in a condimentum odio? Donec ultricies dolor rutrum mus convallis tortor lectus nullam metus faucibus placerat ante. Lacus dis sodales porta erat magnis libero. Sed id vel aliquet mauris non ridiculus lobortis donec nisl fringilla leo. Mus viverra dolor nam dignissim ipsum sollicitudin elementum aptent.
</p>
<p>
Cubilia massa habitasse iaculis suspendisse libero pulvinar dis pulvinar ad tellus ante pretium. Tortor quam litora augue blandit; parturient neque taciti fermentum. Fringilla nascetur nascetur dui litora adipiscing parturient nunc lobortis senectus, posuere habitasse tristique. Feugiat, augue suspendisse felis. Mi est metus rutrum hendrerit duis vivamus nisl leo fames in egestas. Fringilla nulla taciti primis montes morbi facilisi tortor ut eleifend vitae sodales penatibus. Adipiscing pretium mus ligula. Aenean lectus, netus blandit dui sem pellentesque donec sociosqu consequat. Ultricies posuere eget dignissim nisi sem posuere class. Laoreet quis erat.
</p>
<p>
Vitae, lobortis a sociosqu habitasse nulla. Et congue auctor vivamus congue. Blandit nibh eu arcu per augue quam risus litora nibh cras vestibulum. Donec augue imperdiet mi vel lacus fusce interdum vitae volutpat. Ligula inceptos cras amet porttitor curae; praesent habitasse torquent. Consectetur iaculis aliquet sollicitudin, lacinia dui himenaeos. Sit sagittis primis ac nibh varius nunc interdum maecenas torquent. Urna ultricies dignissim aliquam facilisi eros orci ac class ligula? Facilisis metus phasellus.
</p>
<p>
Morbi commodo massa fusce rutrum turpis laoreet non aliquet congue. Lobortis purus, iaculis commodo fames magna sodales hac phasellus suspendisse nulla aliquet. Adipiscing parturient imperdiet iaculis ipsum aliquam curabitur donec mi laoreet sociosqu eleifend. Auctor, pharetra tempus cubilia nullam aliquet taciti. Ligula congue bibendum sollicitudin ridiculus ligula primis. Ac fermentum dignissim cubilia et per quisque. Consectetur.
</p>
<p>
Donec odio parturient non mi. Congue litora vel pharetra. Mauris malesuada aliquam tempor vehicula amet condimentum ligula sem commodo ligula dignissim et. Sodales ut non amet ridiculus. Lectus auctor ut suscipit pharetra, porta est mollis inceptos bibendum sapien. Dis malesuada sit rhoncus mus dignissim aptent mus pellentesque penatibus, maecenas orci. Sociosqu magnis himenaeos bibendum ad. Dis?
</p>
