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
    // Make sure this is reactive
    let index;
</script>

<Scroller
			id="scroller"
			splitscreen
			on:change={(e) => {
				scrollerColor = scrollerColors[e.detail.index];
				console.debug("change", e);
			}}
			on:enter={(e) => console.debug("enter", e)}
			on:exit={(e) => console.debug("exit", e)}
		>
			<div slot="background">
				<Container width="full" height="full" background={scrollerColor} />
			</div>
			<div slot="foreground">
				<ScrollerSection>
					<p>
						When this first caption is visible, the background will appear <Em
							color={scrollerColors[0]}>light grey</Em
						>.
					</p>
				</ScrollerSection>
				<ScrollerSection>
					<p>
						When this section caption is visible, the background will appear <Em
							color={scrollerColors[1]}>dark grey</Em
						>.
					</p>
				</ScrollerSection>
				<ScrollerSection>
					<p>
						When this third caption is visible, the background will appear <Em
							color={scrollerColors[2]}>black</Em
						>.
					</p>
				</ScrollerSection>
			</div>
		</Scroller>

